function TodoInput() {
    return (
        <>
            <div className="container row d-flex  my-3 m-auto ">
                <div className="col-6">
                    <input type="text" placeholder="Enter task" />
                </div>
                <div className="col-4">
                    <input type="date" name="date" id="date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        </>
    )
}
export default TodoInput;