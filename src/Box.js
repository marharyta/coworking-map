import React from "react";
import Transition from 'react-transition-group/Transition';

class Example extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            show: false,
            entered: false,
        };
    }

    render() {
        const { show } = this.state;
        return (
            <div style={{ paddingTop: '2rem' }}>
                <p
                    onClick={() => {
                        this.setState(state => ({
                            show: !state.show,
                        }));
                    }}
                >
                    Toggle
                </p>
                <div style={{ marginTop: '1rem' }}>
                    <Transition
                        in={show}
                        timeout={1000}
                        unmountOnExit
                    >
                        {state => {
                            switch (state) {
                                case 'entering':
                                    return 'Entering…';
                                case 'entered':
                                    return 'Entered!';
                                case 'exiting':
                                    return 'Exiting…';
                                case 'exited':
                                    return 'Exited!';
                            }
                        }}
                    </Transition>
                </div>
            </div>
        );
    }
}

export default Example;