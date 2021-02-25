
{/* <div>
    ¡También funciona
    para comentarios multilínea! 
    Hello, {name}!
</div>
*/}

{/* Un componente simple Sin REACT JSX*/ }
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hola ",
            this.props.name
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), document.getElementById('hello-example'));


{/* Un componente simple Con REACT JSX*/ }
class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hola {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
);


{/* Un componente con estado de segundos Sin REACT JSX*/ }
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return React.createElement(
            'div',
            null,
            'Segundos: ',
            this.state.seconds
        );
    }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));


{/* Un componente con estado de segundos Con REACT JSX*/ }
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Segundos: {this.state.seconds}
            </div>
        );
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example')
);


{/* 
    Usando props y state, podemos integrar todo en una pequeña aplicación de tareas pendientes. 
    Este ejemplo usa state para tener un control de la lista actual de objetos así como el texto
    que el usuario ha ingresado. A pesar de que los manejadores de eventos parecen ser renderizados 
    en línea, serán recolectados e implementados usando delegación de eventos.
*/}
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Tareas pendientes</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        ¿Qué se necesita hacer?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Añadir #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('todos-example')
);