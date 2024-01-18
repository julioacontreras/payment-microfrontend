import { Option } from '../ui/components/input-select'

export function getCoinTypesToSelect(): Promise<Option[]> {
    return new Promise (resolve => {
        setTimeout(() => {
            const options: Option[] = [
                {
                  title: 'Bitcoin',
                  value: '1',
                  url: './bitcoin.svg'
                },
                {
                  title: 'Etherium',
                  value: '2',
                  url: './etherium.svg'
                },
                {
                  title: 'Polygon',
                  value: '3',
                  url: './polygon.svg'
                },
                {
                  title: 'Ripple',
                  value: '4',
                  url: './ripple.svg'
                }
              ]
            
            resolve(options)
        }, 1000)
    })
}