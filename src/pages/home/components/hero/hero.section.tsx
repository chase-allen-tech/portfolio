import React from 'react';
import Icon from '@icon-park/react/es/all';
import Container from '@/components/container';
import FlexRow from '@/components/flex-row';
import FlexCol from '@/components/flex-col';
import Hyperlink from '@/components/hyperlink';
import Linkedin from '@/icons/linkedin';
import links from '@/constants/links.json';
import './hero.style.scss';
import { ClassNames } from '@/modules/classNames';



function HeroSection() {
	const CN = new ClassNames('hero');

	return (
		<section className={CN.generate('')}>
			<span className={CN.generate('circle', ['one'])}/>
			<span className={CN.generate('circle', ['two'])}/>
			<Container>
				<FlexRow>
					<FlexCol xs={24} sm={24} md={18}>
						<div className={CN.generate('content')}>
							<h1>Hi, 👋🏻<br/> <i>I'm</i> Chase</h1>
							<p>
								I’m a software engineer with around seven years of experience building and
								delivering products that make real business impact. Over the years, I’ve taken
								projects from the idea stage all the way through to production, working closely
								with both technical and non-technical teams. I enjoy solving complex problems,
								improving development processes, and helping teams deliver quality results on
								time. My technical focus includes database design and management, and I work
								daily with languages and frameworks like Golang, Python, Node.js, and React.
							</p>
							<div className={CN.generate('actions')}>
								<Hyperlink
									variant={'primary-light'}
									to={'Chase_go.pdf'}
									target="_blank"
									data-tooltip-id="tooltip-area"
									data-tooltip-content="LinkedIn"
									data-tooltip-place="bottom"
								>
									<Icon type={'DownloadTwo'} size={24}/> Download CV
								</Hyperlink>
								<Hyperlink
									icon={true}
									variant={'linear-light'}
									to={links["social"]["linkedin"]}
									target="_blank"
									data-tooltip-id="tooltip-area"
									data-tooltip-content="LinkedIn"
									data-tooltip-place="bottom"
								>
									<Linkedin size={24}/>
								</Hyperlink>
								<Hyperlink
									icon={true}
									variant={'linear-light'}
									to={links["social"]["github"]}
									target="_blank"
									data-tooltip-id="tooltip-area"
									data-tooltip-content="Github"
									data-tooltip-place="bottom"
								>
									<Icon type="Github" theme="filled" size={24}/>
								</Hyperlink>
							</div>
						</div>
					</FlexCol>
				</FlexRow>
			</Container>
			<span className={'hero-mouse'}/>
		</section>
	);
}

export default HeroSection;
