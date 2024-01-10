# Configs Module

## Overview

This module contains configuration files that define various settings for the application depending on the environment it's running in.

## Files

- `default.json`: Contains default configuration values that are common across all environments.
- `development.json`: Contains configuration values specific to the development environment.
- `production.json`: Contains configuration values specific to the production environment.
- `test.json`: Contains configuration values specific to the testing environment.

## Usage

The `Configs` module is utilized by the application to dynamically load environment-specific settings. It should not contain any secrets or sensitive information, as these are stored in environment variables or separate secret management systems.

To switch between different configurations, set the `NODE_ENV` environment variable to the respective environment's name (e.g., `development`, `production`, `test`). The configuration loader will select the appropriate file based on this variable.

## Structure

The JSON files contain key-value pairs that represent the settings required for the application. These may include:

- Database connection strings
- Server port numbers
- External API keys (for non-sensitive keys only)
- System-wide parameters such as standard loan durations

## Best Practices

- Do not hard-code sensitive information into the configuration files.
- Use `default.json` for common settings and override them in environment-specific files if necessary.
- Keep the configuration files clean and well-documented to facilitate easy maintenance and updates.