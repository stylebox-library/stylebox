type AfterReturnType = 
    undefined
  | Array<any>
  | Record<any, any>

type AfterFunctionType = {
  (styles: Array<any>): AfterReturnType  
  (styles: Record<any, any>): AfterReturnType  
}

const after: AfterFunctionType = (param1: any) => {
  if (param1 && typeof param1 === 'object') {
    return {'&:after': [
      {
        content:  '""',
        display:  'block',
        position: 'absolute',
      },
      param1,
    ]}
  }
}

export default after
