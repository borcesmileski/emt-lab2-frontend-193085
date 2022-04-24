import React from 'react';
const Categories = (props) => {
    return (
        <div className={"container mm-4 mt-6"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-hover"}>
                        <thead>
                        <tr>
                            <th scope={"col "}>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((category) => {
                            return (
                                <tr className={"text-primary"}>
                                    <td>{category}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Categories;