import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ConfigPanel } from '~/linodes/linode/settings/components/ConfigPanel';
import { DiskPanel } from '~/linodes/linode/settings/components/DiskPanel';

export function AdvancedPage(props) {
  return (
    <div>
      <section className="card">
        <ConfigPanel {...props} />
      </section>
      <section className="card">
        <DiskPanel {...props} />
      </section>
    </div>
  );
}

AdvancedPage.propTypes = {
  linodes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({
    linodeId: PropTypes.string,
  }),
};

function select(state) {
  return { linodes: state.api.linodes };
}

export default connect(select)(AdvancedPage);
