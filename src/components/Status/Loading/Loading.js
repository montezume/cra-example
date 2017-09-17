import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from 'material-ui/Progress';

const StyledLoading = styled.div`
  margin: 8px;
  padding: 16px;
`;

const CenteredLoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => (
  <StyledLoading>
    <CenteredLoadingContainer>
      <CircularProgress color="accent" />
    </CenteredLoadingContainer>
  </StyledLoading>
);

export default Loading;
