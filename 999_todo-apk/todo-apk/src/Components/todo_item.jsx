function TodoItem1(){
    let t_name = "Bhakti 2hrs";
    let t_date = "05/05/2025";
    return(
        <>
        
        <div className="container row d-flex my-3 m-auto ">
                <div className="col-6">
                <h3>{t_name}</h3>
                </div>
                <div className="col-4">
                   <h3>{t_date}</h3>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}
export default TodoItem1;