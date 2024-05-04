declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  
  declare module "*.module.css"
  
  
  
  declare namespace NodeJS {
    interface Process {
      /**
       * @deprecated Use `typeof window` instead
       */
      readonly browser: boolean
    }
  
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test'
      readonly NEXT_PUBLIC_DefaultLang: "fa" | "en" | "tr" | "ar"
      readonly NEXT_PUBLIC_BASE_URL: string
  
    }
  }