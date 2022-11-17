import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FormLayout from "../common/form/formLayout";
import TextField from "../common/form/textField";
import { validationSchema } from "./validationSchema";

const EditStudentCard = () => {
    const [student, setStudent] = useState({
        name: "",
        surname: "",
        date: "",
        portfolio: ""
    });

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        validationSchema
            .validate(student)
            .then(() => setErrors({}))
            .catch((error) => setErrors({ [error.path]: error.message }));
    }, [student]);

    const history = useHistory();

    useEffect(() => {
        const raw = localStorage.getItem("student");
        setStudent(JSON.parse(raw));
    }, []);

    const handleChange = (target) => {
        setStudent((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleBack = () => {
        history.push("/");
    };

    const handleUpdate = () => {
        localStorage.setItem("student", JSON.stringify(student));
        history.replace("/");
    };

    return (
        <FormLayout tittle="Редактировать">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="name"
                    type="text"
                    value={student.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label="Фамилия"
                    name="surname"
                    type="text"
                    value={student.surname}
                    onChange={handleChange}
                    error={errors.surname}
                />
                <TextField
                    label="Дата рождения"
                    name="date"
                    type="date"
                    value={student.date}
                    onChange={handleChange}
                    error={errors.date}
                />
                <TextField
                    label="Портфолио"
                    name="portfolio"
                    type="text"
                    value={student.portfolio}
                    onChange={handleChange}
                    error={errors.portfolio}
                />
                <button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={() => handleBack()}
                >
                    Назад
                </button>
                <button
                    disabled={!isValid}
                    type="submit"
                    className="btn btn-primary ms-2"
                    onClick={() => handleUpdate()}
                >
                    Обновить
                </button>
            </form>
        </FormLayout>
    );
};

export default EditStudentCard;
