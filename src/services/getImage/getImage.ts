import Times_Now from '../../assets/sources/Times_Now.png';
import HindusTan_Times from '../../assets/sources/Hindustan_Times.png';
import Scroll_in from '../../assets/sources/Scroll_in.png';
import The_Wire from '../../assets/sources/The_Wire.svg';
// interface imageObjType{
// id:number,
// Hindustan_Times || Scroll_in|| The_Wire||Times_Now:string,
// }
const sources = [
	{ id: 1, name: 'Hindustan times', img: { HindusTan_Times } },
	{ id: 2, name: 'Scroll.in', img: { Scroll_in } },
	{ id: 3, name: 'The wire', img: { The_Wire } },
	{ id: 4, name: 'Times now', img: { Times_Now } },
];
const getImage = (props: string) => {
	const source = sources.filter((item) => {
		return item.name === props;
	});
	const imageObj: any = source[0].img;
	const objectKeys: string[] = Object.keys(imageObj);
	const imageKey: string = objectKeys[0];
	const img = imageObj[imageKey];
	return img;
};
export default getImage;
