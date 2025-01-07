# **Steps of the Project**

## **Prerequisites**

## **Step 1: [useFormik]**

```tsx
const formik = useFormik({
    initialValues:{...}
})
```

## **Step 2: [Handling Form States]**

```tsx
<input
    type="text"
    name="name"
    value={formik.values.name}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur} />
```

## **Step 3: [Form Submission]**

```tsx
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

```tsx
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

```tsx

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
})

const formik = useFormik({
    ...
    validationSchema
})

```

## **Step 5: [Simplify Formik Props]**

```tsx
<input id="name" name="name"  {...formik.getFieldProps('name')} />
```

## **Step 6: [Super Simpify a Form]**

```tsx
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

```tsx
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
## **Step 6: [Object and Array Values]**

```tsx

const initialValues = {
    name: '',
    email: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['']
}


const validationSchema = Yup.object({
...
    social: Yup.object({
        facebook: Yup.string().url('Invalid URL').required('Facebook URL is required'),
        twitter: Yup.string().url('Invalid URL').required('Twitter URL is required')
    }),
    phoneNumbers: Yup.array().of(
        Yup.string().required('Phone number is required')
    )
})
<Formik
    initialValues={{name: ''}}
    onSubmit={(values) => {
        console.log(values)
    }}
    validationSchema={validationSchema} >
    <Form>
        <Field name="social.facebook" />
        <ErrorMessage name="social.facebook" />
        ..
        <FieldArray name="phoneNumbers">
            {
                (fieldArrayProps) => {
                    const {push, remove, form} = fieldArrayProps
                    const {values} = form
                    const {phoneNumbers} = values
                    return (
                        <div>
                            {
                                phoneNumbers.map((phoneNumber, index) => (
                                    <div key={index}>
                                        <Field name={`phoneNumbers[${index}]`} />
                                        {
                                            index > 0 && <button type="button" onClick={() => remove(index)}> - </button>
                                        }
                                        <button type="button" onClick={() => push('')}> + </button>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            }
```

## **Step 6: [Disable Submit Button]**

1. **Validity**

```tsx
<button type="submit" disabled={!formik.isValid}>Submit</button>
```

2. **Submission on Progress**

```tsx˝
<button type="submit" disabled={formik.isSubmitting}>Submit</button>
```

