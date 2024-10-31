const StyledCard = styled.div``;

export default function Card() {
  return (
    <StyledCard>
      <div>
        <img src="germany.png" alt="" />
      </div>

      <div>
        <h3>Germany</h3>

        <div>
          <p>
            Populations: <span>32323232</span>
          </p>
          <p>
            Regions: <span>Europe</span>
          </p>
          <p>
            Capital: <span>Berlin</span>
          </p>
        </div>
      </div>
    </StyledCard>
  );
}
