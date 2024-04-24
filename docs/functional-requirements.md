---
id: functional-requirements
title: Functional Requirements Specification
---

# Functional Requirements Specification for ctOP

ctOP (City IoT Open Platform) is designed to provide comprehensive functionality across various aspects of smart city management. Below are the detailed functional requirements categorized by different management aspects.

## User Management

- **FR 1. Default Admin User**
  - The system should come with a default admin user for initial setup.
- **FR 2. User Login**
  - The system should allow for login through email and password.
- **FR 3. User Creation**
  - The system should allow for user creation only through an admin user.
- **FR 4. User Types**
  - The system should support Admin/Vendor/Normal user each having different levels of access.
- **FR 5. User Profile**
  - The system should allow the user to view their details in the profile page.
- **FR 6. User Password Change**
  - The system should allow the user to change their password once logged in.
- **FR 7. View All Users**
  - The system should allow admin users to view all user details.

## Domain Management

- **FR 8. Main Domains Support**
  - The system should by default support: Waste Management, Water Quality, Water Quantity, Water Flooding, and Streetlight domains.
- **FR 9. Domain Creation**
  - The system should in general support the creation of additional domains apart from the ones mentioned.
- **FR 10. Domain Deletion**
  - The system should allow for the deletion of domains given all necessary conditions (e.g., No nodes inside domain) are met.
- **FR 11. View All Domains**
  - The system should allow for viewing all the created/existing domains.

## Sensor Type Management

- **FR 12. Sensor Type Creation**
  - The system should allow an admin user to create a sensor type under a domain which defines the parameters and their data types.
- **FR 13. Sensor Type Inheritance**
  - The system should allow users to select a base sensor type to build upon while creating a sensor type.

## Node Management

- **FR 14. Node Creation**
  - The system should allow users to create nodes with a specific sensor type under a domain.
- **FR 15. Node Deletion**
  - The system should allow users to delete a node from the platform.
- **FR 16. Filter Domains**
  - The system should allow for filtering domains based on location, sensor types, and whether the node is assigned or not.
- **FR 17. View all Nodes**
  - The system should allow for viewing all nodes under a domain.
- **FR 18. View Data of Node**
  - The system should allow for viewing the details of the node such as node name, node parameters, and data sent to the node.
- **FR 19. Assign Node to Vendor**
  - The system should allow an admin user to assign a node to a vendor user for data posting.
- **FR 20. Show Node Post Code to Vendor**
  - The system should allow vendor users to access the node data page with the said nodes code for posting data to the platform.
- **FR 21. Show URL to Fetch Latest Data**
  - The system should allow users to fetch the latest data point of a given node.

## Subscriptions

- **FR 22. Subscribe to Nodes**
  - The system should allow users to subscribe to a specific node to get notified of the latest data.
- **FR 23. Show Subscriptions to Nodes**
  - The system should allow users to see whether they have subscribed to a specific node.
- **FR 24. List All Subscriptions of the User**
  - The system should allow users to see all their subscriptions to all their nodes.

## Others

- **FR 25. oneM2M Compliance**
  - The system should be compliant with the oneM2M standards.
- **FR 26. Data Exchange**
  - The system should allow for data exchange interface.
