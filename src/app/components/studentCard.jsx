import React from "react";
import { Link } from "react-router-dom";
import FormLayout from "../common/form/formLayout";

import { renderPhrase } from "../renderPhrase";

const StudentCard = () => {
    if (localStorage.getItem("student")) {
        const raw = localStorage.getItem("student");
        const student = JSON.parse(raw);

        const year = new Date(student.date).getFullYear();
        const nowDate = new Date();
        const ageYear = nowDate.getFullYear() - year;

        return (
            <FormLayout tittle="Карточка студента">
                <div className="mb-4">
                    <h6>Имя: {student.name}</h6>
                    <h6>Фамилия: {student.surname}</h6>
                    <h6>
                        Год рождения:{" "}
                        {`${year} (${ageYear} ${renderPhrase(ageYear)})`}
                    </h6>
                    <h6>Портфолио: {student.portfolio}</h6>
                </div>
                <Link to="/edit">
                    <button className="btn btn-primary">Редактировать</button>
                </Link>
            </FormLayout>
        );
    } else {
        return (
            <FormLayout tittle="Карточка студента">
                <h4 className="mb-4">Нет данных</h4>
                <Link to="/create">
                    <button className="btn btn-primary">Добавить</button>
                </Link>
            </FormLayout>
        );
    }
};

export default StudentCard;
