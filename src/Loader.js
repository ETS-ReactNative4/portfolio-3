import React, { PureComponent } from 'react';
import './Loader.css';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

export default class LoaderSplash extends PureComponent {

  render() {
    return (
      <div className="loader-root" >
        <BounceLoader
          sizeUnit="px"
          size={100}
          color="#387184"
        />
      </div>
    );
  }

}
