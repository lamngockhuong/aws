## ADDED Requirements

### Requirement: AWS MCP Documentation Fetching

The system SHALL require AI assistants to fetch the latest AWS documentation using AWS MCP before writing or updating documentation.

#### Scenario: Writing new documentation

- **WHEN** an AI assistant is asked to write documentation about an AWS service
- **THEN** the assistant MUST first use `mcp_awslabs_aws-documentation-mcp-server_read_documentation` to fetch the latest official AWS documentation
- **AND** the assistant MUST use the fetched documentation as the primary source of truth
- **AND** the assistant MUST cite the AWS documentation URL in the documentation

#### Scenario: Updating existing documentation

- **WHEN** an AI assistant is asked to update existing documentation
- **THEN** the assistant MUST first fetch the latest AWS documentation using AWS MCP
- **AND** the assistant MUST compare with existing content to identify updates
- **AND** the assistant MUST update the documentation to reflect the latest information

### Requirement: Documentation Writing Workflow

The system SHALL follow a standardized workflow when creating new documentation.

#### Scenario: Creating new service documentation

- **WHEN** creating documentation for a new AWS service
- **THEN** the assistant MUST fetch latest documentation using AWS MCP
- **AND** the assistant MUST create comprehensive documentation covering: Overview, Key Features, Core Concepts, Use Cases, Best Practices, Integration, and Related Services
- **AND** the assistant MUST maintain consistency with existing documentation structure
- **AND** the assistant MUST include code examples and diagrams where appropriate

#### Scenario: Completing draft documentation

- **WHEN** completing documentation marked as "Draft"
- **THEN** the assistant MUST fetch latest AWS documentation first
- **AND** the assistant MUST expand the draft with comprehensive content
- **AND** the assistant MUST ensure all sections are complete and accurate

### Requirement: Vietnamese Translation Workflow

The system SHALL follow translation guidelines when creating Vietnamese versions of documentation.

#### Scenario: Translating English documentation to Vietnamese

- **WHEN** translating English documentation to Vietnamese
- **THEN** the assistant MUST preserve all AWS service names, API names, and technical terms in English
- **AND** the assistant MUST translate for meaning and clarity, not word-by-word
- **AND** the assistant MUST maintain the same professional tone as AWS documentation
- **AND** the assistant MUST ensure technical accuracy matches the source
- **AND** the assistant MUST place Vietnamese translation in `docs/vi/` mirroring the English structure

#### Scenario: Keeping translations in sync

- **WHEN** English documentation is updated
- **THEN** the corresponding Vietnamese documentation in `docs/vi/` MUST be updated to match
- **AND** the assistant MUST maintain the same structure and organization
- **AND** the assistant MUST ensure all technical terms remain in English

### Requirement: Documentation Quality Standards

The system SHALL maintain high quality standards for all documentation.

#### Scenario: Content completeness

- **WHEN** creating or updating documentation
- **THEN** the documentation MUST include all required sections based on the documentation type
- **AND** the documentation MUST be accurate and up-to-date with latest AWS information
- **AND** the documentation MUST include relevant examples and use cases

#### Scenario: Technical accuracy

- **WHEN** writing documentation
- **THEN** all technical information MUST be verified against latest AWS documentation
- **AND** all code examples MUST be tested and functional
- **AND** all service limits and pricing information MUST be current

### Requirement: AWS MCP Tool Usage

The system SHALL use AWS MCP tools to fetch documentation from official AWS sources.

#### Scenario: Fetching service documentation

- **WHEN** needing AWS service documentation
- **THEN** the assistant MUST use `mcp_awslabs_aws-documentation-mcp-server_read_documentation` with the appropriate AWS documentation URL
- **AND** the assistant MUST use `mcp_awslabs_aws-documentation-mcp-server_recommend` to discover related documentation pages
- **AND** the assistant MUST fetch documentation from `docs.aws.amazon.com` domain

#### Scenario: Documentation URL format

- **WHEN** fetching AWS documentation
- **THEN** the URL MUST be from `docs.aws.amazon.com` domain
- **AND** the URL MUST end with `.html`
- **AND** the assistant MUST use the full URL path to the specific documentation page
