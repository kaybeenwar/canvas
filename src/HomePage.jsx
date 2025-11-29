import React from 'react';
import { Heading } from '@instructure/ui-heading';
import { Text } from '@instructure/ui-text';
import { Button } from '@instructure/ui-buttons';
import { View } from '@instructure/ui-view';
import { Flex } from '@instructure/ui-flex';
import { Grid } from '@instructure/ui-grid';

const HomePage = () => {
  return (
    <View as="div" background="secondary">
      {/* Hero Section */}
      <View 
        as="header" 
        background="brand" 
        padding="xx-large"
        textAlign="center"
      >
        <Heading level="h1" color="primary-inverse" margin="0 0 medium">
          Welcome to Our Application
        </Heading>
        <Text size="large" color="primary-inverse">
          Built with Instructure UI - A powerful React component library
        </Text>
        <View margin="large 0 0">
          <Button color="secondary" size="large">
            Get Started
          </Button>
        </View>
      </View>

      {/* Features Section */}
      <View as="section" padding="xx-large" maxWidth="75rem" margin="0 auto">
        <Heading level="h2" textAlign="center" margin="0 0 x-large">
          Key Features
        </Heading>
        
        <Grid colSpacing="large" rowSpacing="large">
          <Grid.Row>
            <Grid.Col>
              <View 
                as="div" 
                background="primary" 
                padding="large"
                borderRadius="medium"
                shadow="resting"
              >
                <Heading level="h3" color="brand" margin="0 0 small">
                  Accessible
                </Heading>
                <Text>
                  Built with accessibility in mind, supporting screen readers 
                  and keyboard navigation
                </Text>
              </View>
            </Grid.Col>
            
            <Grid.Col>
              <View 
                as="div" 
                background="primary" 
                padding="large"
                borderRadius="medium"
                shadow="resting"
              >
                <Heading level="h3" color="brand" margin="0 0 small">
                  Themeable
                </Heading>
                <Text>
                  Customize the look and feel to match your brand with 
                  powerful theming options
                </Text>
              </View>
            </Grid.Col>
            
            <Grid.Col>
              <View 
                as="div" 
                background="primary" 
                padding="large"
                borderRadius="medium"
                shadow="resting"
              >
                <Heading level="h3" color="brand" margin="0 0 small">
                  Comprehensive
                </Heading>
                <Text>
                  Over 50+ components covering all common UI patterns 
                  and use cases
                </Text>
              </View>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </View>
    </View>
  );
};

export default HomePage;