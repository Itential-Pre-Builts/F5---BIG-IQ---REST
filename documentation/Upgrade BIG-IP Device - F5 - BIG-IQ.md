# Upgrade BIG-IP Device - F5 - BIG-IQ

## Table of Contents

- [Upgrade BIG-IP Device - F5 - BIG-IQ](#upgrade-big-ip-device---f5---big-iq)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [Supported IAP Versions](#supported-iap-versions)
    - [External Dependencies](#external-dependencies)
    - [Adapters](#adapters)
    - [How to Install](#how-to-install)
    - [Testing](#testing)
  - [Using this Workflow Project](#using-this-workflow-project)
    - [Entry Point IAP Component](#entry-point-iap-component)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
  - [Support](#support)

## Overview

Upgrades BIG-IP device over F5 BIG-IQ

Capabilities include:
- Upgrades F5 BIG-IP device over BIG-IQ API
- Provides option to upload iHealth task before and after upgrade
- Verify sufficient disk space exists on BIG-IP for upgrade
- Performs rollback to volume prior to upgrade if upgrade fails
- Does device discovery and import after upgrade
- Supports upgrade of HA pair of devices as well as upgrade of single device
- Updates device upgrade task to include private keys


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Upgrade BIG-IP Device - F5 - BIG-IQ** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Upgrade BIG-IP Device - F5 - BIG-IQ** has been tested with:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>OS Version</th>
      <th>API Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>F5 BIG-IQ</td>
      <td>8.3</td>
      <td></td>
    </tr>
  </tbody>
</table>




### Adapters

This version of **Upgrade BIG-IP Device - F5 - BIG-IQ** has been tested with:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>adapter-f5_bigiq</td>
      <td>^0.3.5</td>
    </tr>
  </tbody>
</table>



### How to Install

To install the Workflow Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Workflow Project.
- Import the Workflow Project in [Admin Essentials](https://docs.itential.com/docs/importing-a-prebuilt-4). 

### Testing

While Itential tests this Workflow Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Workflow Project into a development/testing environment in which you can test the Workflow Project.

## Using this Workflow Project

### Entry Point IAP Component

The primary IAP component to run this Workflow Project is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Upgrade BIG-IP Device - F5 - BIG-IQ</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs to the Workflow Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>deviceAData</td>
      <td>object</td>
      <td>yes</td>
      <td>Set of values for device A in HA pair to upgrade</td>
      <td><pre lang="json">{
  "deviceManagementAddress": "1.2.3.4",
  "deviceManagementPort": "443",
  "deviceManagementHostname": "",
  "machineIdFilterProperty": "address",
  "machineIdFilterValue": "5.6.7.8",
  "targetVolume": "HD1.2"
}</pre></td>
    </tr>    <tr>
      <td>deviceBData</td>
      <td>string</td>
      <td>yes</td>
      <td>Set of values for device B in HA pair to upgrade. If no second device, leave values as empty string</td>
      <td><pre lang="json">{
  "deviceManagementAddress": "",
  "deviceManagementPort": "",
  "deviceManagementHostname": "hostname",
  "machineIdFilterProperty": "address",
  "machineIdFilterValue": "9.8.7.6",
  "targetVolume": "HD1.3"
}</pre></td>
    </tr>    <tr>
      <td>deviceAData.deviceManagementAddress</td>
      <td>string</td>
      <td>yes</td>
      <td>IP address of BIG-IP for license re-activation. If using deviceManagementHostname for license re-activation, leave this value empty as ""</td>
      <td><pre lang="json">1.2.3.4</pre></td>
    </tr>    <tr>
      <td>deviceAData.deviceManagementPort</td>
      <td>string</td>
      <td>yes</td>
      <td>Port of BIG-IP for license re-activation. If using deviceManagementHostname for license re-activation, leave this value empty as ""</td>
      <td><pre lang="json">443</pre></td>
    </tr>    <tr>
      <td>deviceAData.deviceManagementHostname</td>
      <td>string</td>
      <td>yes</td>
      <td>Hostname of BIG-IP for license re-activation. If using deviceManagementAddress and deviceManagementPort for license re-activation, leave this value empty as ""</td>
      <td><pre lang="json">device_hostname</pre></td>
    </tr>    <tr>
      <td>deviceAData.machineIdFilterProperty</td>
      <td>string</td>
      <td>yes</td>
      <td>The property to use to search for BIG-IP machine ID</td>
      <td><pre lang="json">address</pre></td>
    </tr>    <tr>
      <td>deviceAData.machineIdFilterValue</td>
      <td>string</td>
      <td>yes</td>
      <td>The value to use to search for BIG-IP machine Id</td>
      <td><pre lang="json">1.2.3.4</pre></td>
    </tr>    <tr>
      <td>deviceAData.targetVolume</td>
      <td>string</td>
      <td>yes</td>
      <td>Target volume on BIG-IP device to use for upgrade</td>
      <td><pre lang="json">HD1.2</pre></td>
    </tr>    <tr>
      <td>credentialsFilterValue</td>
      <td>string</td>
      <td>yes</td>
      <td>Value to use to search for credential used in iHealth task upload. If not performing iHealth task upload, assign value ""</td>
      <td><pre lang="json">iHealth Credential Name</pre></td>
    </tr>    <tr>
      <td>credentialsFilterProperty</td>
      <td>string</td>
      <td>yes</td>
      <td>Property to use to search for credential used in iHealth task upload. If not performing iHealth task upload, assign value ""</td>
      <td><pre lang="json">displayName</pre></td>
    </tr>    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>IAP adapter to use to send requests to F5 BIG-IQ for automation</td>
      <td><pre lang="json">F5-BIG-IQ</pre></td>
    </tr>    <tr>
      <td>deviceBackupLifeTime</td>
      <td>number</td>
      <td>yes</td>
      <td>The number of days to keep backup file on BIG-IQ</td>
      <td><pre lang="json">30</pre></td>
    </tr>    <tr>
      <td>deviceBackupDescription</td>
      <td>string</td>
      <td>yes</td>
      <td>Description to associate with device file backup</td>
      <td><pre lang="json">Backup device before software upgrade</pre></td>
    </tr>    <tr>
      <td>iHealthTaskName</td>
      <td>string</td>
      <td>yes</td>
      <td>The name to give to iHealth task name</td>
      <td><pre lang="json">Upload Task for Software Upgrade</pre></td>
    </tr>    <tr>
      <td>importDeviceTaskName</td>
      <td>string</td>
      <td>yes</td>
      <td>Name of task for importing device to BIG-IQ</td>
      <td><pre lang="json">Rediscover adc_core</pre></td>
    </tr>    <tr>
      <td>softwareUpgradeTaskName</td>
      <td>string</td>
      <td>yes</td>
      <td>Name of task for software upgrade</td>
      <td><pre lang="json">Upgrade BIG-IP</pre></td>
    </tr>    <tr>
      <td>softwareImageName</td>
      <td>string</td>
      <td>yes</td>
      <td>Image on BIG-IQ to use for software upgrade</td>
      <td><pre lang="json">BIGIP-14.1.5.4-0.0.2.iso</pre></td>
    </tr>    <tr>
      <td>uploadiHealthTask</td>
      <td>boolean</td>
      <td>yes</td>
      <td>Value used to determine whether or not to do iHealth upload. If true, performs iHealth upload before and after upgrade and if false, skips both iHealth upload steps.</td>
      <td><pre lang="json">true</pre></td>
    </tr>    <tr>
      <td>deviceRebootWait</td>
      <td>number</td>
      <td>yes</td>
      <td>Amount of time in seconds to wait for device to reboot in the event a rollback is performed</td>
      <td><pre lang="json">300</pre></td>
    </tr>
  </tbody>
</table>

  

#### Vendor Input Documentation

https://clouddocs.f5.com/products/big-iq/mgmt-api/v8.1.0/ApiReferences/bigiq_public_api_ref/r_public_api_references.html
  


### Outputs

The following table lists the outputs of the Workflow Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>returnStatus</td>
      <td>string</td>
      <td>This value is assigned "SUCCESS" if the device upgrade succeeded and is assigned "FAILED" if any step of the device upgrade failed</td>
      <td><pre lang="json">SUCCESS</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

The following items show how to query successful results from the output:

      
##### Result of Device Upgrade

`returnStatus`

      
    
    
  



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "deviceAData": {
    "deviceManagementAddress": "1.2.3.4",
    "deviceManagementPort": "443",
    "deviceManagementHostname": "",
    "machineIdFilterProperty": "address",
    "machineIdFilterValue": "5.6.7.8",
    "targetVolume": "HD1.2"
  },
  "deviceBData": {
    "deviceManagementAddress": "",
    "deviceManagementPort": "",
    "deviceManagementHostname": "hostname",
    "machineIdFilterProperty": "address",
    "machineIdFilterValue": "9.8.7.6",
    "targetVolume": "HD1.3"
  },
  "softwareImageName": "BIGIP-14.1.5.5-0.0.2.iso",
  "softwareUpgradeTaskName": "Upgrade-BIG-IP",
  "credentialsFilterValue": "iHealth Name",
  "credentialsFilterProperty": "displayName",
  "adapterId": "F5-BIG-IQ",
  "deviceBackupLifeTime": 30,
  "deviceBackupDescription": "Backup Device",
  "importDeviceTaskName": "Rediscover adc_core",
  "iHealthTaskName": "Upload iHealth task",
  "uploadiHealthTask": true,
  "deviceRebootWait": 300
} </pre>

    
    
Output:
<pre>{
  "returnStatus": "SUCCESS"
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "deviceAData": {
    "deviceManagementAddress": "1.2.3.4",
    "deviceManagementPort": "443",
    "deviceManagementHostname": "",
    "machineIdFilterProperty": "address",
    "machineIdFilterValue": "5.6.7.8",
    "targetVolume": "HD1.2"
  },
  "deviceBData": {
    "deviceManagementAddress": "",
    "deviceManagementPort": "",
    "deviceManagementHostname": "",
    "machineIdFilterProperty": "",
    "machineIdFilterValue": "",
    "targetVolume": ""
  },
  "softwareImageName": "BIGIP-14.1.5.5-0.0.2.iso",
  "softwareUpgradeTaskName": "Upgrade-BIG-IP",
  "credentialsFilterValue": "",
  "credentialsFilterProperty": "",
  "adapterId": "F5-BIG-IQ",
  "deviceBackupLifeTime": 30,
  "deviceBackupDescription": "Backup Device",
  "importDeviceTaskName": "Rediscover adc_core",
  "iHealthTaskName": "",
  "uploadiHealthTask": false,
  "deviceRebootWait": 300
} </pre>

    
    
Output:
<pre>{
  "returnStatus": "SUCCESS"
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.