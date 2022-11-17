import * as yup from "yup";
export const validationSchema = yup.object().shape({
    portfolio: yup
        .string()
        .required("Ссылка обязательна для заполнения")
        .matches(
            /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_/0-9\-#.]*)\??([a-z_/0-9\-#=&]*)/,
            "Ссылка введена некорректно"
        ),
    date: yup.string().required("Дата рождения обязательна для заполнения"),
    surname: yup
        .string()
        .required("Фамилия обязательна для заполнения")
        .matches(
            /^[a-zA-Zа-яА-Я]{1,}([-][a-zA-Zа-яА-Я]{1,})?$/,
            "Введите корректную фамилию"
        ),
    name: yup
        .string()
        .required("Имя обязательно для заполнения")
        .matches(
            /^[a-zA-Zа-яА-Я]{1,}([-][a-zA-Zа-яА-Я]{1,})?$/,
            "Введите корректное имя"
        )
});
