declare module "*.module.css" {
    const classes: { [key: string]: string }
    export default classes
}

declare module "*.scss" {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}

declare type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>
      }
    : T
