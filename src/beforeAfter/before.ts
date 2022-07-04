type BeforeReturnType = 
    undefined
  | Array<any>
  | Record<any, any>

type BeforeFunctionType = {
  (styles: Array<any>): BeforeReturnType  
  (styles: Record<any, any>): BeforeReturnType  
}

const before: BeforeFunctionType = (param1: any) => {
  if (param1 && typeof param1 === 'object') {
    return {'&:before': [
      {
        content:  '""',
        display:  'block',
        position: 'absolute',
      },
      param1,
    ]}
  }
}

export default before
