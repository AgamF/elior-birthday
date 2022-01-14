import './DevHistory.css';

const DevHistory = () => {
    return (
        <div className='dev-history-container'>
            <h1 className='animate__animated animate__fadeInDown'>My dev history:</h1>
            <p className='animate__animated animate__fadeInUp'>
                My current position is a Dev Ops Engineer <br/>
                at Earnix, an insurance evaluation company. <br/>
                I excel at using cloud services such as AWS and Azure, <br/>
                as well as container orchestration with Docker and Kubernetes. <br/>
                I work with Python & Terraform on a UNIX/Mac environment. <br/>
                Previously, i worked at the support team of Authentics. <br/>
                (Make sure to get vaccinated!)
            </p>
            <div className='animate__animated animate__fadeInUp'>
                <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hzdzyidsuzzwrld8mfod' />
                <img height={256} width={256} src='https://www.au10tix.com/wp-content/themes/oceanwp-child-theme-master/new-theme/images/logo-social.png'/>
                <img height={256} width={256} src='https://pbs.twimg.com/profile_images/1473756532827246593/KRgw2UkV_400x400.jpg'/>
                <img height={256} width={256} src='https://petergroenewegen.gallerycdn.vsassets.io/extensions/petergroenewegen/petergroenewegen-xpirit-vsts-release-terraform/2.4.0/1564163335441/Microsoft.VisualStudio.Services.Icons.Default'/>
                <img height={256} width={500} src='https://pngset.com/images/microsoft-azure-logo-windows-logo-microsoft-azure-vector-text-symbol-trademark-word-transparent-png-810639.png'/>
                <img height={256} width={256} src='https://global-uploads.webflow.com/5fc10dd0bd65e8aa5f7a27cb/6197ced1733ba1719d3fb952_jenkins.jpeg'/>
            </div>
        </div>
    )
}

export default DevHistory;