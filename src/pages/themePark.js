import React from 'react';
import { SketchPicker } from 'react-color';

export default class ThemePark extends React.Component {
    state = {
        switchOn: false,
    }
    hanldeSwitchOn = () => {
        this.setState(state => ({
            switchOn: !state.switchOn,
        }));
    }
    _handleChangeComplete = (color) => {
      const { onChangeComplete } = this.props;
       onChangeComplete(color);
    }
    render() {
        const { color } = this.props; 
        const { switchOn } = this.state;
        return (
          <div className="sign-theme">
            <span onClick={this.hanldeSwitchOn}>{ switchOn ? '收起' : '更改主题颜色'}</span>
            {
                    switchOn ? (
                      <div>
                        <SketchPicker 
                          color={color.hex}
                          onChangeComplete={this._handleChangeComplete} />
                      </div>
) : ''
                }     
          </div>
        );
    }
}
