import { Container } from './CopyLink.styled';
import CopyIcon from '../../../icons/copy-link.svg';
import { BaseUI } from '@/interfaces';

export interface CopyLinkProps extends BaseUI {
    onClickFunc?: any;
}

const CopyLink: React.FC<CopyLinkProps> = ({ onClickFunc, className }) => {
    return (
        <Container onClick={onClickFunc} className={className}>
            <CopyIcon />
        </Container>
    );
};

export default CopyLink;
