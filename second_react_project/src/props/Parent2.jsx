const parent2 = () => {
    return (
        <div>
        <h1>Parent2</h1>
        <Child2 name={'raj'} id={1} age={20} email={'damarnath8919@gmail.com'}/>
        </div>
    );

}
//const Child2= ({name, id, age, email}) => {
const Child2 = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.id}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
            <h1>Child2</h1>
        </div>
    );
}

export default parent2;