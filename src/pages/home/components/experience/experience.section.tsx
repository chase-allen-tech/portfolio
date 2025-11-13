import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@/components/container';
import { Experience } from './type';
import Icon from '@icon-park/react/es/all';
import './experience.style.scss';
import { ClassNames } from '@/modules/classNames';


function ExperienceSection() {
	const CN = new ClassNames('experience');
	const { t} = useTranslation(['experience']);
	const objective1: Array<string> = new Array(9).fill(0).map((item, index) => t(`1.${index}`));
	const objective2: Array<string> = new Array(7).fill(0).map((item, index) => t(`2.${index}`));
	const objective3: Array<string> = new Array(5).fill(0).map((item, index) => t(`3.${index}`));
	const objective4: Array<string> = new Array(5).fill(0).map((item, index) => t(`4.${index}`));
	const objective5: Array<string> = new Array(4).fill(0).map((item, index) => t(`5.${index}`));

	const experiencesList: Array<Experience> = [
		{
			title: 'Nike',
			type: 'Remote',
			position: 'Software Engineer (Golang)',
			location: 'CA, US',
			date: 'Jan 2025 - Present',
			translation_key: 'objective1',
			objectives: objective1,
		},
		{
			title: 'Intuit',
			type: 'Remote',
			position: 'Full Stack Software Developer IV',
			location: 'CA, US',
			date: 'Oct 2023 - Dec 2024',
			translation_key: 'objective2',
			objectives: objective2,
		},
		{
			title: 'World Wide Technology',
			type: 'Remote',
			position: 'Golang/Python Automation Engineer',
			location: 'GA, US',
			date: 'Jun 2023 - Oct 2023',
			translation_key: 'objective3',
			objectives: objective3,
		},
		{
			title: 'Eduforma',
			type: 'Remote',
			position: 'Golang Developer | Principal Software Engineer',
			location: 'Lyon, France',
			date: 'Jul 2021 - Jun 2023',
			translation_key: 'objective4',
			objectives: objective4,
		},
		{
			title: 'Microsoft',
			type: 'Remote',
			position: 'Senior Full Stack Developer | Golang Developer',
			location: 'TX, US',
			date: 'Sep 2018 - Feb 2021',
			translation_key: 'objective5',
			objectives: objective5,
		}
	];

	return (
		<section className={CN.generate()}>
			<span className={CN.generate('circle', ['one'])} />
			<span className={CN.generate('circle', ['two'])} />
			<span className={CN.generate('circle', ['three'])} />
			<span className={CN.generate('circle', ['four'])} />
			<Container>
				{experiencesList.map((item: Experience) => (
					<div className={CN.generate('item')}>
						<span className={CN.generate('bullet')}></span>
						<span>{item.title} <em>({item.type})</em></span>
						<h2>{ item.position }</h2>
						<div className={CN.generate('details')}>
							<span>{ item.location }</span>
							<p>{ item.date }</p>
						</div>
						<ul>
							{item.objectives.map((objective: string, index: number) => (
								<li className={CN.generate('objective')} key={`${item.translation_key}_${index}`}>
									<Icon type={'Dot'} theme={'outline'} size={24} />
									<p>{objective}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</Container>
		</section>
	);
}

export default ExperienceSection;
