import { WorkflowRunner, PrebuiltRunner } from '@itential-tools/iap-cypress-testing-library/testRunner/testRunners';
const UpgradeBIGIPDeviceF5BIGIQJob0Data = require('../fixtures/stubs/Upgrade BIG-IP Device - F5 - BIG-IQ Job0.json');
const RetrieveiHealthCredentialsIdF5BIGIQJob1Data = require('../fixtures/stubs/Retrieve iHealth Credentials Id - F5 - BIG-IQ Job1.json');
const RetrieveDeviceMachineIdF5BIGIQJob2Data = require('../fixtures/stubs/Retrieve Device MachineId - F5 - BIG-IQ Job2.json');
const CreateiHealthUploadTaskF5BIGIQJob3Data = require('../fixtures/stubs/Create iHealth Upload Task - F5 - BIG-IQ Job3.json');
const CreateDeviceBackupF5BIGIQJob4Data = require('../fixtures/stubs/Create Device Backup - F5 - BIG-IQ Job4.json');
const RunScriptonBIGIPF5BIGIQJob5Data = require('../fixtures/stubs/Run Script on BIG-IP - F5 - BIG-IQ Job5.json');
const CreateiHealthUploadTaskF5BIGIQJob6Data = require('../fixtures/stubs/Create iHealth Upload Task - F5 - BIG-IQ Job6.json');
const DiscoverBIGIPDeviceF5BIGIQJob7Data = require('../fixtures/stubs/Discover BIG-IP Device - F5 - BIG-IQ Job7.json');
const ImportBIGIPDeviceF5BIGIQJob8Data = require('../fixtures/stubs/Import BIG-IP Device - F5 - BIG-IQ Job8.json');
const RunBIGIPUpgradeF5BIGIQJob9Data = require('../fixtures/stubs/Run BIG-IP Upgrade - F5 - BIG-IQ Job9.json');
const CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Data = require('../fixtures/stubs/Check BIG-IP Current Software Version - F5 - BIG-IQ Job10.json');
const RunScriptonBIGIPF5BIGIQJob11Data = require('../fixtures/stubs/Run Script on BIG-IP - F5 - BIG-IQ Job11.json');
const RunScriptonBIGIPF5BIGIQJob12Data = require('../fixtures/stubs/Run Script on BIG-IP - F5 - BIG-IQ Job12.json');
const UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Data = require('../fixtures/stubs/Upgrade BIG-IP Device With Rollback - F5 - BIG-IQ Job0.json');
const RollbackBIGIPDeviceF5BIGIQJob0Data = require('../fixtures/stubs/Rollback BIG-IP Device - F5 - BIG-IQ Job0.json');
const RebootBIGIPDeviceF5BIGIQJob1Data = require('../fixtures/stubs/Reboot BIG-IP Device - F5 - BIG-IQ Job1.json');

function initializeWorkflowRunner(workflow, importWorkflow, isStub, stubTasks) {
  let workflowRunner = new WorkflowRunner(workflow.name);

  if (importWorkflow) {
    // cancel all running jobs for workflow
    workflowRunner.job.cancelAllJobs();

    workflowRunner.deleteWorkflow.allCopies({
      failOnStatusCode: false
    });
    // Check if Stub flag is enabled
    if(isStub){
      stubTasks.forEach(stubTask=>{
        workflow = workflowRunner.stub.task({
          stub: stubTask,
          workflow: workflow,
        });
      })
    }
    workflowRunner.importWorkflow.single({
      workflow,
      failOnStatusCode: false
    });
  }

  /* Verify workflow */
  workflowRunner.verifyWorkflow.exists();
  workflowRunner.verifyWorkflow.hasNoDuplicates({});
  // workflowRunner.verifyWorkflow.dependenciesOnline();

  return workflowRunner;
}

// Function to delete the stubbed workflow and reimport it without the stub tasks
function replaceStubTasks(workflowRunner, workflowName) {
    workflowRunner.deleteWorkflow.allCopies({
        failOnStatusCode: false,
    });
    workflowRunner.importWorkflow.single({ workflow: workflowName });
    workflowRunner.verifyWorkflow.exists();
    workflowRunner.verifyWorkflow.hasNoDuplicates({});
}

describe('Default: Cypress Tests', function () {
  let prebuiltRunner;
  let UpgradeBIGIPDeviceF5BIGIQJob0Workflow;
  let RetrieveiHealthCredentialsIdF5BIGIQJob1Workflow;
  let RetrieveDeviceMachineIdF5BIGIQJob2Workflow;
  let CreateiHealthUploadTaskF5BIGIQJob3Workflow;
  let CreateDeviceBackupF5BIGIQJob4Workflow;
  let RunScriptonBIGIPF5BIGIQJob5Workflow;
  let CreateiHealthUploadTaskF5BIGIQJob6Workflow;
  let DiscoverBIGIPDeviceF5BIGIQJob7Workflow;
  let ImportBIGIPDeviceF5BIGIQJob8Workflow;
  let RunBIGIPUpgradeF5BIGIQJob9Workflow;
  let CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Workflow;
  let RunScriptonBIGIPF5BIGIQJob11Workflow;
  let RunScriptonBIGIPF5BIGIQJob12Workflow;
  let UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Workflow
  let RollbackBIGIPDeviceF5BIGIQJob0Workflow;
  let RebootBIGIPDeviceF5BIGIQJob1Workflow;
  
  before(function () {
    //creates a prebuilt runner for importing the project
    cy.fixture(`../../../artifact.json`).then((data) => {
      prebuiltRunner = new PrebuiltRunner(data);
    });
    cy.fixture(`../../../bundles/workflows/Upgrade BIG-IP Device - F5 - BIG-IQ.json`).then((data) => {
      UpgradeBIGIPDeviceF5BIGIQJob0Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Retrieve iHealth Credentials Id - F5 - BIG-IQ.json`).then((data) => {
      RetrieveiHealthCredentialsIdF5BIGIQJob1Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Retrieve Device MachineId - F5 - BIG-IQ.json`).then((data) => {
      RetrieveDeviceMachineIdF5BIGIQJob2Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create iHealth Upload Task - F5 - BIG-IQ.json`).then((data) => {
      CreateiHealthUploadTaskF5BIGIQJob3Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create Device Backup - F5 - BIG-IQ.json`).then((data) => {
      CreateDeviceBackupF5BIGIQJob4Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Run Script on BIG-IP - F5 - BIG-IQ.json`).then((data) => {
      RunScriptonBIGIPF5BIGIQJob5Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create iHealth Upload Task - F5 - BIG-IQ.json`).then((data) => {
      CreateiHealthUploadTaskF5BIGIQJob6Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Discover BIG-IP Device - F5 - BIG-IQ.json`).then((data) => {
      DiscoverBIGIPDeviceF5BIGIQJob7Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Import BIG-IP Device - F5 - BIG-IQ.json`).then((data) => {
      ImportBIGIPDeviceF5BIGIQJob8Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Run BIG-IP Upgrade - F5 - BIG-IQ.json`).then((data) => {
      RunBIGIPUpgradeF5BIGIQJob9Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Check BIG-IP Current Software Version - F5 - BIG-IQ.json`).then((data) => {
      CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Run Script on BIG-IP - F5 - BIG-IQ.json`).then((data) => {
      RunScriptonBIGIPF5BIGIQJob11Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Run Script on BIG-IP - F5 - BIG-IQ.json`).then((data) => {
      RunScriptonBIGIPF5BIGIQJob12Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Upgrade BIG-IP Device - F5 - BIG-IQ.json`).then((data) => {
      UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Rollback BIG-IP Device - F5 - BIG-IQ.json`).then((data) => {
      RollbackBIGIPDeviceF5BIGIQJob0Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Reboot BIG-IP Device - F5 - BIG-IQ.json`).then((data) => {
      RebootBIGIPDeviceF5BIGIQJob1Workflow = data;
    });
  });

  after(function() {
    prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
  });

  describe('Default: Imports Project', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    it('Default: Should import the project into IAP', function () {
        prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
        prebuiltRunner.importPrebuilt.single({});
    });
  })

  describe('Upgrade BIG-IP Device - F5 - BIG-IQ', function() {
    it('It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(UpgradeBIGIPDeviceF5BIGIQJob0Workflow, importWorkflow, isStub, UpgradeBIGIPDeviceF5BIGIQJob0Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: UpgradeBIGIPDeviceF5BIGIQJob0Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(UpgradeBIGIPDeviceF5BIGIQJob0Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(UpgradeBIGIPDeviceF5BIGIQJob0Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, UpgradeBIGIPDeviceF5BIGIQJob0Workflow);
      });
    })
  })

  describe('Retrieve iHealth Credentials Id - F5 - BIG-IQ', function() {
    it('Retrieve iHealth Credentials Id - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RetrieveiHealthCredentialsIdF5BIGIQJob1Workflow, importWorkflow, isStub, RetrieveiHealthCredentialsIdF5BIGIQJob1Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RetrieveiHealthCredentialsIdF5BIGIQJob1Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RetrieveiHealthCredentialsIdF5BIGIQJob1Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RetrieveiHealthCredentialsIdF5BIGIQJob1Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RetrieveiHealthCredentialsIdF5BIGIQJob1Workflow);
      });
    })
  })

  describe('Retrieve Device MachineId - F5 - BIG-IQ', function() {
    it('Retrieve Device MachineId - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RetrieveDeviceMachineIdF5BIGIQJob2Workflow, importWorkflow, isStub, RetrieveDeviceMachineIdF5BIGIQJob2Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RetrieveDeviceMachineIdF5BIGIQJob2Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RetrieveDeviceMachineIdF5BIGIQJob2Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RetrieveDeviceMachineIdF5BIGIQJob2Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RetrieveDeviceMachineIdF5BIGIQJob2Workflow);
      });
    })
  })

  describe('Create iHealth Upload Task - F5 - BIG-IQ', function() {
    it('Create iHealth Upload Task - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateiHealthUploadTaskF5BIGIQJob3Workflow, importWorkflow, isStub, CreateiHealthUploadTaskF5BIGIQJob3Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateiHealthUploadTaskF5BIGIQJob3Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateiHealthUploadTaskF5BIGIQJob3Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateiHealthUploadTaskF5BIGIQJob3Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateiHealthUploadTaskF5BIGIQJob3Workflow);
      });
    })
  })

  describe('Create Device Backup - F5 - BIG-IQ', function() {
    it('Create Device Backup - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateDeviceBackupF5BIGIQJob4Workflow, importWorkflow, isStub, CreateDeviceBackupF5BIGIQJob4Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateDeviceBackupF5BIGIQJob4Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateDeviceBackupF5BIGIQJob4Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateDeviceBackupF5BIGIQJob4Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateDeviceBackupF5BIGIQJob4Workflow);
      });
    })
  })

  describe('Run Script on BIG-IP - F5 - BIG-IQ', function() {
    it('Run Script on BIG-IP - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RunScriptonBIGIPF5BIGIQJob5Workflow, importWorkflow, isStub, RunScriptonBIGIPF5BIGIQJob5Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RunScriptonBIGIPF5BIGIQJob5Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RunScriptonBIGIPF5BIGIQJob5Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RunScriptonBIGIPF5BIGIQJob5Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RunScriptonBIGIPF5BIGIQJob5Workflow);
      });
    })
  })

  describe('Create iHealth Upload Task - F5 - BIG-IQ', function() {
    it('Create iHealth Upload Task - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateiHealthUploadTaskF5BIGIQJob6Workflow, importWorkflow, isStub, CreateiHealthUploadTaskF5BIGIQJob6Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateiHealthUploadTaskF5BIGIQJob6Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateiHealthUploadTaskF5BIGIQJob6Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateiHealthUploadTaskF5BIGIQJob6Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateiHealthUploadTaskF5BIGIQJob6Workflow);
      });
    })
  })

  describe('Discover BIG-IP Device - F5 - BIG-IQ', function() {
    it('Discover BIG-IP Device - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(DiscoverBIGIPDeviceF5BIGIQJob7Workflow, importWorkflow, isStub, DiscoverBIGIPDeviceF5BIGIQJob7Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: DiscoverBIGIPDeviceF5BIGIQJob7Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(DiscoverBIGIPDeviceF5BIGIQJob7Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(DiscoverBIGIPDeviceF5BIGIQJob7Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, DiscoverBIGIPDeviceF5BIGIQJob7Workflow);
      });
    })
  })

  describe('Import BIG-IP Device - F5 - BIG-IQ', function() {
    it('Import BIG-IP Device - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(ImportBIGIPDeviceF5BIGIQJob8Workflow, importWorkflow, isStub, ImportBIGIPDeviceF5BIGIQJob8Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: ImportBIGIPDeviceF5BIGIQJob8Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(ImportBIGIPDeviceF5BIGIQJob8Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(ImportBIGIPDeviceF5BIGIQJob8Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, ImportBIGIPDeviceF5BIGIQJob8Workflow);
      });
    })
  })

  describe('Run BIG-IP Upgrade - F5 - BIG-IQ', function() {
    it('Run BIG-IP Upgrade - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RunBIGIPUpgradeF5BIGIQJob9Workflow, importWorkflow, isStub, RunBIGIPUpgradeF5BIGIQJob9Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RunBIGIPUpgradeF5BIGIQJob9Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RunBIGIPUpgradeF5BIGIQJob9Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RunBIGIPUpgradeF5BIGIQJob9Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RunBIGIPUpgradeF5BIGIQJob9Workflow);
      });
    })
  })

  describe('Check BIG-IP Current Software Version - F5 - BIG-IQ', function() {
    it('Check BIG-IP Current Software Version - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Workflow, importWorkflow, isStub, CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CheckBIGIPCurrentSoftwareVersionF5BIGIQJob10Workflow);
      });
    })
  })

  describe('Run Script on BIG-IP - F5 - BIG-IQ', function() {
    it('Run Script on BIG-IP - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RunScriptonBIGIPF5BIGIQJob11Workflow, importWorkflow, isStub, RunScriptonBIGIPF5BIGIQJob11Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RunScriptonBIGIPF5BIGIQJob11Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RunScriptonBIGIPF5BIGIQJob11Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RunScriptonBIGIPF5BIGIQJob11Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RunScriptonBIGIPF5BIGIQJob11Workflow);
      });
    })
  })

  describe('Run Script on BIG-IP - F5 - BIG-IQ', function() {
    it('Run Script on BIG-IP - F5 - BIG-IQ: It should successfuly upgrade BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RunScriptonBIGIPF5BIGIQJob12Workflow, importWorkflow, isStub, RunScriptonBIGIPF5BIGIQJob12Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RunScriptonBIGIPF5BIGIQJob12Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RunScriptonBIGIPF5BIGIQJob12Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RunScriptonBIGIPF5BIGIQJob12Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RunScriptonBIGIPF5BIGIQJob12Workflow);
      });
    })
  })

  describe('Attempt Upgrade and Rollback BIG-IP Device - F5 - BIG-IQ', function() {
    it('It should attempt upgrade and perform rollback of BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Workflow, importWorkflow, isStub, UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, UpgradeBIGIPDeviceWithRollbackF5BIGIQJob0Workflow);
      });
    })
  })

  describe('Rollback BIG-IP Device - F5 - BIG-IQ', function() {
    it('It should successfuly perform rollback of BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RollbackBIGIPDeviceF5BIGIQJob0Workflow, importWorkflow, isStub, RollbackBIGIPDeviceF5BIGIQJob0Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RollbackBIGIPDeviceF5BIGIQJob0Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RollbackBIGIPDeviceF5BIGIQJob0Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RollbackBIGIPDeviceF5BIGIQJob0Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RollbackBIGIPDeviceF5BIGIQJob0Workflow);
      });
    })
  })

  describe('Reboot BIG-IP Device - F5 - BIG-IQ', function() {
    it('Reboot BIG-IP Device - F5 - BIG-IQ: It should successfuly perform rollback of BIG-IP device over BIG-IQ', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(RebootBIGIPDeviceF5BIGIQJob1Workflow, importWorkflow, isStub, RebootBIGIPDeviceF5BIGIQJob1Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: RebootBIGIPDeviceF5BIGIQJob1Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(RebootBIGIPDeviceF5BIGIQJob1Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(RebootBIGIPDeviceF5BIGIQJob1Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, RebootBIGIPDeviceF5BIGIQJob1Workflow);
      });
    })
  })
});
