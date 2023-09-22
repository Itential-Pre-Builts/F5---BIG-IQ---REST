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
      <td>^0.3.3</td>
    </tr>
  </tbody>
</table>



### How to Install

To install the Workflow Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Workflow Project.
- Import the Workflow Project in [Admin Essentials](https://docs.itential.com/docs/importing-a-prebuilt-4). 

Alternatively, you may clone this repository and run `npm pack` to create a tarball which can then be installed via the offline installer in App-Artifacts. Please consult the documentation for App-Artifacts for further information.

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
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>IAP adapter to use to send requests to F5 BIG-IQ for automation</td>
      <td><pre lang="json">F5-BIG-IQ</pre></td>
    </tr>
  </tbody>
</table>

  


### Outputs

There are no outputs for this Workflow Project.



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "credentialsFilterValue": "iHealth Account",
  "credentialsFilterProperty": "displayName",
  "machineIdFilterProperty": "address",
  "machineIdFilterValue": "10.0.0.8",
  "adapterId": "F5-BIG-IQ",
  "deviceBackupFileName": "device_backup.ucs",
  "deviceBackupLifeTime": 1,
  "deviceBackupDescription": "Backup over for software upgrade",
  "importDeviceTaskName": "Rediscover adc_core",
  "iHealthTaskName": "iHealth Upload Task for Software Upgrade",
  "softwareUpgradeTaskName": "Upgrade-BIG-IP",
  "softwareImageName": "BIGIP-14.1.5.5-0.0.2.iso",
  "targetVolume": "HD1.2"
}
 </pre>

    
    
Output:
<pre>{} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.