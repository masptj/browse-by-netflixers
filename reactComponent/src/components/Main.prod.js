
import React from 'react';
import {IntlProvider} from 'react-intl';

import CategoryBrowse from './CategoryBrowse/CategoryBrowse';
import I18n from './CategoryBrowse/i18n';

let messages = I18n.discoverMessagesByLocale();

class AppComponent extends React.Component {
  render() {
    return (
      <li>
        <IntlProvider
          locale={I18n.locale}
          messages={messages}>
          <CategoryBrowse />
        </IntlProvider>
      </li>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
