import React from "react";

class TypeWriter extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            i: 0
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.unmounted = false;
        this.loopNum = 0;
        this.period = 5000;
        this.isDeleting = false;
        this.tick();
    }

    componentWillUnmount() {
        this.unmounted = true;
    }

    tick() {
        if (this.unmounted) {
            return;
        }

        const { data: toRotate } = this.props;
        this.setState({ i: this.loopNum % toRotate.length });
        const fullTxt = toRotate[this.state.i];

        let newText = "";
        if (this.isDeleting) {
            newText = fullTxt.substring(0, this.state.text.length - 1);
        } else {
            newText = fullTxt.substring(0, this.state.text.length + 1);
        }

        let delta = 200 - Math.random() * 200;

        // if (this.isDeleting) {
        //   delta /= 2;
        // }

        if (!this.isDeleting && newText === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && newText === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 20;
        }

        this.setState({ text: newText });

        setTimeout(() => {
            this.tick();
        }, delta);
    }

    render() {
        return <span className={this.props.style[this.state.i]}>{this.state.text}</span>;
    }
}

export default TypeWriter;