import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from 'Components/UI/PageLayout';
import NotFound from 'Components/UI/Pages/NotFound';
import AboutUs from 'Components/UI/Pages/About';
import SwipeControl from 'Components/UI/Swipe';
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
