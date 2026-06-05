import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Switch, Col, Form, Row, Select, Typography } from "antd";
import { getCompetitions, activeCompetition, deleteCompetitionData, updateCourts, updateCategories, updateGrids, updatePlayers, updateMatches, updateRankings } from "../../api/competitionService";
import { getBatchsActive, updateBatchsActive } from "../../api/settingsService";
import { GlobalContext } from '../../App';
import { MESSAGES, CONSOLE, LOADER, MODAL, DATA, COMPETITION, BUTTON } from '../../utils/constants';
import Loader from "../Loader/Loader";
import TransparentLoader from "../Loader/TransparentLoader";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import PropTypes from 'prop-types';
import './Settings.css';

const { Title } = Typography;
const { Option } = Select;

const Settings = ({ setSettingError, setReload }) => {
  const { setGlobalErrorMessage, setGlobalSuccessMessage } = useContext(GlobalContext);

  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [batchsEnabled, setBatchsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransparentLoading, setIsTransparentLoading] = useState(false);
  const [transparentLoaderMessage, setTransparentLoaderMessage] = useState(LOADER.SETTINGS_UPDATE);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const competitionsData = await getCompetitions();
        setCompetitions(competitionsData);
        const activeCompetition = competitionsData.find(c => c.isActive === true);
        if (activeCompetition) {
          setSelectedCompetition(activeCompetition.homologationId);
        }

        const batchsActive = await getBatchsActive();
        setBatchsEnabled(batchsActive);

        setIsLoading(false);
      } catch (error) {
        setGlobalErrorMessage(MESSAGES.ERROR.GET.DATA);
        console.error(CONSOLE.FETCH.DATA, error);
      }
    };

    fetchData();
  }, [setGlobalErrorMessage]);

  const handleCompetitionChange = (value) => {
    setSelectedCompetition(value);
  };

  const handleBatchToggle = (checked) => {
    setBatchsEnabled(checked);
    checked ? updateBatchsActive("1") : updateBatchsActive("0");
  };

  const saveCompetition = async () => {
    try {
      setShowConfirmation(false);
      setTransparentLoaderMessage(COMPETITION.COMPETITON_ACTIVE);
      setIsTransparentLoading(true);
      let batchActive = await activeCompetition(selectedCompetition);
      setTransparentLoaderMessage(COMPETITION.DELETE_DATA);
      await deleteCompetitionData()
      setTransparentLoaderMessage(COMPETITION.UPDATE_COURTS);
      await updateCourts();
      setTransparentLoaderMessage(COMPETITION.UPDATE_CATEGORIES);
      await updateCategories();
      setTransparentLoaderMessage(COMPETITION.UPDATE_RANKINGS);
      await updateRankings();
      setTransparentLoaderMessage(COMPETITION.UPDATE_GRIDS);
      await updateGrids();
      setTransparentLoaderMessage(COMPETITION.UPDATE_PLAYERS);
      await updatePlayers();
      setTransparentLoaderMessage(COMPETITION.UPDATE_MATCHES);
      await updateMatches();
      if (batchActive) {
        await updateBatchsActive("1");
      }
      setGlobalSuccessMessage(MESSAGES.SUCCESS.UPDATE.COMPETITION);
      setIsTransparentLoading(false);
      setSettingError(false);
      setReload(true);
    } catch (error) {
      console.error(CONSOLE.UPDATE.COMPETITION, error);
      setGlobalErrorMessage(MESSAGES.ERROR.UPDATE.COMPETITION);
    } finally {
      setIsTransparentLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            if(showConfirmation) {
                setShowConfirmation(false);
            }
        }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
}, [showConfirmation]);

  if (isLoading) {
    return <Loader message={LOADER.SETTINGS} />;
  }


  return (
    <div className="settings-container">
      <Title level={2} className="settings-title">
        {DATA.SETTING}
      </Title>

      <Card title={DATA.COMPETITION_SELECTION}>
        <Form layout="vertical">
          <Row gutter={16} align="middle">
            <Col span={18}>
              <Form.Item label={DATA.SELECT_COMPETITION}>
                <Select
                  value={selectedCompetition}
                  onChange={handleCompetitionChange}
                  className="settings-select"
                >
                  {competitions.map((competition) => (
                    <Option key={competition.homologationId} value={competition.homologationId}>
                      {competition.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                disabled={selectedCompetition === null}
                onClick={() => setShowConfirmation(true)}
                className="settings-button"
              >
                {BUTTON.UPDATE_COMPETITION}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card title="Options">
        <Row gutter={16}>
          <Col span={8}>
          <Form.Item label={DATA.ACTIVATION_BATCH}>
            <Switch
              checked={batchsEnabled}
              onChange={handleBatchToggle}
            />
          </Form.Item>
          </Col>
        </Row>
      </Card>

      {/* Loader */}
      {isTransparentLoading && <TransparentLoader message={transparentLoaderMessage} />}
      {showConfirmation && (
        <ConfirmModal
            message={MODAL.CONFIRM.SETTINGS_1}
            message2={MODAL.CONFIRM.SETTINGS_2}
            onSave={saveCompetition}
            onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default Settings;

Settings.propTypes = {
  setSettingError: PropTypes.func.isRequired,
  setReload: PropTypes.func.isRequired
};