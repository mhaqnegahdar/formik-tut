# **Steps of the Project**

## **Prerequisites**

## **Step 1: [useFormik]**

```
const formik = useFormik({
    initialValues:{...}
})
```

## **Step 2: [Handling Form States]**

```
<input
    type="text"
    name="name"
    value={formik.values.name}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur} />
```

## **Step 3: [Form Submission]**

```
const formik = useFormik({
    ...
    onSubmit: (values) => {
        console.log(values)
    }
})

<form onSubmit={formik.handleSubmit}>
....
    <button type="submit">Submit</button>
```

## **Step 4: [Form Validation]**

```
const formik = useFormik({
    ...
    validate: (values) => {
        let errors = {}
        if (!values.name) {
            errors.name = 'Name is required'
        }
        return errors
    }
})

```

Or Simply use **Yup** for validation

```

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
})

const formik = useFormik({
    ...
    validationSchema
})

```

## **Step 5: [Simplify Formik Props]**

```
<input id="name" name="name"  {...formik.getFieldProps('name')} />
```

## **Step 6: [Super Simpify a Form]**

```
<Formik
    initialValues={{name: ''}}
    onSubmit={(values) => {
        console.log(values)
    }}
    validationSchema={validationSchema} >
    <Form>
        <Field name="name" />
        <ErrorMessage name="name" />
        <button type="submit">Submit</button>
```

## **Step 6: [Super Simpify a Form]**

```
<Formik
    initialValues={{name: ''}}
    onSubmit={(values) => {
        console.log(values)
    }}
    validationSchema={validationSchema} >
    <Form>
        <Field name="name" />
        <ErrorMessage name="name" />
        <button type="submit">Submit</button>
```
