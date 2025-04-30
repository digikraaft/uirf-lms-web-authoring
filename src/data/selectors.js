// Default values for commonly used waffle flags
const DEFAULT_WAFFLE_FLAGS = {
  useNewCourseOutlinePage: false,
  useNewHomePage: false,
  useNewUpdatesPage: false,
  useNewFilesUploadsPage: false,
  useNewVideoUploadsPage: false,
  useNewScheduleDetailsPage: false,
  useNewGradingPage: false,
  useNewCourseTeamPage: false,
  useNewGroupConfigurationsPage: false,
  useNewAdvancedSettingsPage: false,
  useNewCertificatesPage: false,
  useNewImportPage: false,
  useNewExportPage: false,
  enableCourseOptimizer: false,
  useNewUnitPage: false,
};

export const getWaffleFlags = (state) => {
  const flags = state.courseDetail?.waffleFlags || {};
  // Merge with defaults, keeping any existing values
  return { ...DEFAULT_WAFFLE_FLAGS, ...flags };
};
