import { FC } from 'react'

export const DarkLayout: FC = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h1>DarkLayout</h1>
            {children}
        </div>
    )
}
