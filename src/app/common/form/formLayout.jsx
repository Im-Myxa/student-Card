import React from "react";
import PropTypes from "prop-types";

const FormLayout = ({ tittle, children }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h1 className="mb-4">{tittle}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
};

FormLayout.propTypes = {
    tittle: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default FormLayout;
