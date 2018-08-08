import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from 'Components/UI/Pages/PageLayout';
import NotFound from 'Components/UI/Pages/NotFound';
import AboutUs from 'Components/UI/Pages/About/About';
import PoseGallery from 'Components/PoseGallery';


export default () => (
  <PageLayout>
    <Switch>
      <Route
        exact
        path="/"
        component={PoseGallery}
      />
      <Route
        exact
        path="/pose/:searchTerm?"
        component={PoseGallery}
      />
      <Route path="/about" component={AboutUs} />
      <Route component={NotFound} />
    </Switch>
  </PageLayout>
);
