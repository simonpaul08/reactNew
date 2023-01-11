import React, { Component } from 'react';
import { render } from 'react-dom';
// import './style.css';

import {Resizable} from 're-resizable'
import Draggable from 'react-draggable'

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL'

export default class NewTest extends React.Component {
  render = () =>
    <Draggable>
      <Resizable
        defaultSize={{
          width: 200,
          height: 360
        }}
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        lockAspectRatio={true}
      >
      </Resizable>
    </Draggable>
}


