import { Suspense } from 'react';

import { StyledDetailedLineList } from './DetailedLineList.styles';
import DetailedLine from '../DetailedLine/DetailedLine';
import { useMapQuery } from '../../../service/queries/map';
import useLogin from '../../../service/hooks/useLogin';

const DetailedLineList = () => {
  const { accessToken } = useLogin();
  const { data: lines } = useMapQuery(accessToken);

  return (
    <StyledDetailedLineList>
      <Suspense fallback={true}>
        {lines!.map((line) => (
          <DetailedLine key={line.id} line={line} />
        ))}
      </Suspense>
    </StyledDetailedLineList>
  );
};

export default DetailedLineList;
