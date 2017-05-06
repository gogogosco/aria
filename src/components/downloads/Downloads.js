import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class Downloads extends React.Component {

    componentDidMount() {
        Config.setTitle("Downloads");
    }

    getSetup(){
        if (!Config.setup_download_link){
            return null;
        }
        var h1 = Config.server_name + " Setup";
        return (
            <div>
                <h1>{h1}</h1>
                <a href={Config.setup_download_link} target="_blank">
                    <div className="download-link">
                        <img src="/images/setup.png" alt=""/>
                        <div className="download-description">
                            <h2>Click here to download our setup.</h2>
                            <h3>Run as administrator.</h3>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    getClient(){
        if (!Config.client_download_link){
            return null;
        }
        var h1 = Config.server_name + " Client";
        return (
            <div>
                <h1>{h1}</h1>
                <a href={Config.client_download_link} target="_blank">
                    <div className="download-link">
                        <img src="/images/client.png" alt=""/>
                        <div className="download-description">
                            <h2>Click here to download our client.</h2>
                            <h3>Run as administrator.</h3>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    render() {

      var setup = this.getSetup();
      var client = this.getClient();

      return (
          <div>
              <Banner title="Downloads" subtitle="Get the files you need to get in-game!"></Banner>
              <main className="downloads">
                  <h1>Installation Instructions</h1>
                  <ol>
                    <li>Download the Windows setup and client for {Config.server_name}.</li>
                    <li>Double-click the client after dropping it inside in the installation folder to start playing!</li>
                    <li>Login with your account credentials. If you haven't registered, please do so!</li>
                  </ol>
                  {setup}
                  {client}
              </main>
          </div>
      );
    }
}

export default Downloads;
