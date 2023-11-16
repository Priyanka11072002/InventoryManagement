import   * as   Yup  from 'yup'

export const CatorySchemas = Yup.object({
    name:Yup.string().min(3).max(15)
    .required("Product name is required").matches(/^[aA-zZ\s]+$/,'Product name must be alphabetic'),
    description:Yup.string().min(20).max(200).required("Description isrequired")
})