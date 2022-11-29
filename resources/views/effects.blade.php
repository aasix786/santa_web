<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js"></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script> -->
        <meta name = "description" content = "Keep the Magic of Christmas ALIVE! Show the kids Santa in front of YOUR TREE caught on camera!" />
        <title>We Caught Santa - Catch Santa in YOUR Home!</title>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Bitter:400,400i,700|Montserrat:300,400,700');
            @import url('//fonts.googleapis.com/icon?family=Material+Icons');
            .material-icons {
                font-family: 'Material Icons';
                font-weight: normal;
                font-style: normal;
                font-size: 1rem;
                display: inline-block;
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;
                /* Support for all WebKit browsers. */
                -webkit-font-smoothing: antialiased;
                /* Support for Safari and Chrome. */
                text-rendering: optimizeLegibility;
                /* Support for Firefox. */
                -moz-osx-font-smoothing: grayscale;
                /* Support for IE. */
                font-feature-settings: 'liga';
            }
            * {
                box-sizing: border-box;
            }
            html,
            body {
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                font-wieght: 300;
                color: #404040;
            }
            .container {
                display: flex;
                width: 50rem;
                height: 40rem;
                margin: 2rem auto;
            }
            .photo {
                position: relative;
                height: 100%;
                overflow: hidden;
            }
            .photo img {
                width: auto;
                height: 100%;
            }
            .photo-mode {
                display: none;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                width: 100%;
                height: 100%;
                background: #0099cc;
                background-image: url('https://images.unsplash.com/photo-1439853949127-fa647821eba0?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb');
                background-size: auto 100%;
            }
            .photo-mode--multiply,
            .photo-mode--overlay,
            .photo-mode--darken,
            .photo-mode--lighten,
            .photo-mode--exclusion,
            .photo-mode--difference,
            .photo-mode--screen,
            .photo-mode--luminosity {
                display: block;
            }
            .photo-mode--multiply {
                background-blend-mode: multiply;
            }
            .photo-mode--overlay {
                background-blend-mode: overlay;
            }
            .photo-mode--darken {
                background-blend-mode: darken;
            }
            .photo-mode--lighten {
                background-blend-mode: lighten;
            }
            .photo-mode--exclusion {
                background-blend-mode: exclusion;
            }
            .photo-mode--difference {
                background-blend-mode: difference;
            }
            .photo-mode--screen {
                background-blend-mode: screen;
            }
            .photo-mode--luminosity {
                background-blend-mode: luminosity;
            }
            .filter {
                flex: 1;
                padding: 1rem;
                background: #f0f8ff;
            }
            .filter-item {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                height: calc(100% / 8);
            }
            .filter-item label {
                width: 100%;
                text-transform: uppercase;
                font-size: 0.75rem;
                color: #404040;
            }
            .filter-item i {
                width: 1.5rem;
                height: 1.5rem;
                line-height: 1.5rem;
                margin-right: 1.5rem;
                color: #404040;
            }
            .filter-item input {
                width: calc(100% - 3rem);
                margin: 0;
            }
            .filter .modes {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-right: -1rem;
            }
            .filter .modes-item {
                cursor: pointer;
                width: 4rem;
                height: 4rem;
                margin: 0 1rem 1rem 0;
                border-radius: 100%;
                background-color: #0099cc;
                background-image: url('https://images.unsplash.com/photo-1439853949127-fa647821eba0?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb');
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
            .filter .modes-item--multiply {
                background-blend-mode: multiply;
            }
            .filter .modes-item--overlay {
                background-blend-mode: overlay;
            }
            .filter .modes-item--darken {
                background-blend-mode: darken;
            }
            .filter .modes-item--lighten {
                background-blend-mode: lighten;
            }
            .filter .modes-item--exclusion {
                background-blend-mode: exclusion;
            }
            .filter .modes-item--difference {
                background-blend-mode: difference;
            }
            .filter .modes-item--screen {
                background-blend-mode: screen;
            }
            .filter .modes-item--luminosity {
                background-blend-mode: luminosity;
            }
            /* Range Inputs Style */
            input[type=range]:invalid {
                box-shadow: none;
            }
            input[type=range] {
                -webkit-appearance: none;
                background: transparent;
                -webkit-margin: -1rem 0 0 0;
            }
            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                cursor: pointer;
                background: #e1e1e1;
                border-color: transparent;
                color: transparent;
            }
            input[type=range]:focus {
                outline: none;
            }
            input[type=range]::-ms-track {
                cursor: pointer;
                background: #e1e1e1;
                border-color: transparent;
                color: transparent;
            }
            input[type=range]::-moz-range-track {
                cursor: pointer;
                background: #e1e1e1;
                border-color: transparent;
                color: transparent;
                border-radius: 1.3px;
            }
            input[type=range]::-webkit-slider-thumb {
                border-radius: 100%;
                height: 1.5rem;
                width: 1.5rem;
                background: #ffffff;
                cursor: pointer;
                background: #c6e2ff;
                border: 0;
                margin-top: -0.75rem;
            }
            input[type=range]::-webkit-slider-runnable-track {
                height: 2px;
                cursor: pointer;
                background: #e1e1e1;
                border-radius: 1.3px;
                margin-top: -1rem;
            }
            /* All the same stuff for Firefox */
            input[type=range]::-moz-range-thumb {
                border-radius: 100%;
                height: 1.5rem;
                width: 1.5rem;
                background: #ffffff;
                cursor: pointer;
                background: #c6e2ff;
                border: 0;
            }
            input[type=range]::-moz-focus-outer {
                border: 0;
            }
            @-moz-document url-prefix() {
                input[type=range] {
                    position: relative;
                    top: 0.3rem;
                }
            }
        </style>

    </head>
    <body>
        <div class="app"></div>

        <script>
            const filters = [
                {
                    label: 'brightness',
                    value: 1,
                    icon: 'brightness_5'
                },
                {
                    label: 'grayscale',
                    value: 0,
                    icon: 'brightness_1'
                },
                {
                    label: 'contrast',
                    value: 1,
                    icon: 'brightness_6'
                },
                {
                    label: 'hue',
                    value: 0,
                    icon: 'brightness_3'
                }, {
                    label: 'sepia',
                    value: 0,
                    icon: 'brightness_1'
                }, {
                    label: 'saturate',
                    value: 1,
                    icon: 'brightness_7'
                },
            ]

            const Photo = (props) => {
                return (<div className="photo">
                    <img style={
                            props.style
                        }
                        src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"/>
                    <div className={
                        props.className
                    }></div>
                </div>)
            }

            const Modes = (props) => {
                return (<div className="modes">
                    <div id="multiply" className="modes-item modes-item--multiply"
                        onClick={
                            props.onClick
                    }></div>
                    <div id="overlay" className="modes-item modes-item--overlay"
                        onClick={
                            props.onClick
                    }></div>
                    <div id="darken" className="modes-item modes-item--darken"
                        onClick={
                            props.onClick
                    }></div>
                    <div id="lighten" className="modes-item modes-item--lighten"
                        onClick={
                            props.onClick
                    }></div>
                    <div id="exclusion" className="modes-item modes-item--exclusion"
                        onClick={
                            props.onClick
                    }></div>
                    <div id="difference" className="modes-item modes-item--difference"
                        onClick={
                            props.onClick
                    }></div>
                    <div id="screen" className="modes-item modes-item--screen"
                        onClick={
                            props.onClick
                    }></div>
                    <div id="luminosity" className="modes-item modes-item--luminosity"
                        onClick={
                            props.onClick
                    }></div>
                </div>)
            }

            const Item = (props) => {
                return (<div className="filter-item">
                    <label> {
                        props.label
                    }</label>
                    <i className="material-icons"> {
                        props.icon
                    }</i>
                    <input name={
                            props.label
                        }
                        type="range"
                        defaultValue={
                            props.value
                        }
                        id={
                            props.index
                        }
                        onChange={
                            props.onChange
                        }/>
                </div>)
            }

            const Filter = (props) => {

                let item = props.filters.map((item, index) => {
                    return (<Item index={index}
                        label={
                            item.label
                        }
                        icon={
                            item.icon
                        }
                        value={
                            item.value
                        }
                        onChange={
                            props.onChange
                        }/>)
                })

                return (<div className="filter"> {item}
                    <Modes onClick={
                        props.handleModes
                    }/>
                </div>)
            }

            class App extends React.Component {
                constructor(props) {
                    super(props)
                    this.state = {
                        filters: filters,
                        mode: false
                    }
                    this.onChange = this.onChange.bind(this)
                    this.handleModes = this.handleModes.bind(this)
                }

                render() {

                    let style = {
                        filter: 'grayScale(' + this.state.filters[1].value + ')' + 'hue-rotate(' + this.state.filters[3].value + 'deg)' + 'brightness(' + this.state.filters[0].value + ')' + 'contrast(' + this.state.filters[2].value + ')' + 'sepia(' + this.state.filters[4].value + ')' + 'saturate(' + this.state.filters[5].value + ')'
                    }

                    return (<div className="container">
                        <Photo style={style}
                            className={
                                this.state.mode ? 'photo-mode photo-mode--' + this.state.modeClass : 'photo-mode'
                            }/>
                        <Filter filters={
                                this.state.filters
                            }
                            onChange={
                                this.onChange
                            }
                            handleModes={
                                this.handleModes
                            }/>
                    </div>)
                }

                handleModes(event) {
                    let name = event.target.id
                    this.setState({modeClass: name, mode: true})
                }

                onChange(event) {
                    this.setState({mode: false})
                    let filterId = Number(event.target.id),
                        filters = this.state.filters,
                        value = Number(event.target.value),
                        name = event.target.name
                    if (name == 'grayscale') {
                        filters[filterId].value = value / 100
                    } else if (name == 'hue') {
                        filters[filterId].value = value * 3.6
                    } else if (name == 'brightness') {
                        filters[filterId].value = value < 1 ? 1 : (1 + value / 10)
                    } else if (name == 'contrast') {
                        filters[filterId].value = value < 1 ? 1 : (1 + value / 10)
                    } else if (name == 'sepia') {
                        filters[filterId].value = value / 100
                    } else if (name == 'saturate') {
                        filters[filterId].value = value < 1 ? 1 : (1 + value / 10)
                    }
                    this.setState({filters: filters})
                }
            }

            ReactDOM.render (<App/>, document.querySelector('.app'))
        </script>
    </body>
</html>
