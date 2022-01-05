import styled from 'styled-components';

const authTemplateblock = styled.div``;

const AuthTemplate = ({ children }) => {
	return <authTemplateblock>{children}</authTemplateblock>;
};

export default AuthTemplate;