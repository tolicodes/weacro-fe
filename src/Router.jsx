import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from 'UI/PageLayout';
import NotFound from 'Screen/NotFound';
import AboutUs from 'Screen/About';
import SwipeControl from 'UI/Swipe';
import PoseMapper from 'Components/Mapper';

const GalleryDisplay = () => (
  <SwipeControl>
    <PoseMapper />
  </SwipeControl>
);

export default () => (
  <PageLayout>
    <Switch>
      <Route
        exact
        path="/"
        component={GalleryDisplay}
      />
      <Route
        exact
        path="/pose/:searchTerm?"
        component={GalleryDisplay}
      />
      <Route path="/about" component={AboutUs} />
      <Route component={NotFound} />
    </Switch>
  </PageLayout>
);
