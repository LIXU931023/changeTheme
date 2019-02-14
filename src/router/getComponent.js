import Loadable from 'react-loadable';
import Loading from '../container/loading';
// const Loading = (props) => {
//     if(props.error){
//         return <div>加载错误。。。</div>
//     } else if(props.timeOut){
//         return <div>加载耗时过长</div>
//     } else if(props.pastDelay){
//         return <div>页面加载中。。。。</div>
//     }else {
//         return null
//     }
// }
const getComponents = name => Loadable({
        loader: () => import(`../pages/content/components/${name}`),
        loading: Loading,
        timeout: 10000,
    });
export const Mainscreen = getComponents('Mainscreen');
export const BasicAnimations = getComponents('BasicAnimations');
export const ExampleAnimations = getComponents('ExampleAnimations');
export const BasicForm = getComponents('BasicForm');
export const AdvancedTable = getComponents('AdvancedTable');
export const BasicTable = getComponents('BasicTable');
export const Buttons = getComponents('Buttons');
export const Icons = getComponents('Icons');
export const Modals = getComponents('Modals');
export const Spins = getComponents('Spins');
export const Tabs = getComponents('Tabs');
