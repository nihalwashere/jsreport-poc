module.exports = `
<style>
    table {
        width: 200px;
        margin: 20px auto;
        table-layout: auto;
    }
    
    table,
    td,
    th {
        border-collapse: collapse;
    }
    
    th,
    td {
        padding: 10px;
        border: solid 1px;
        text-align: center;
    }
</style>
<table>
    <tr>
        {{#each headers}}
        <th>{{this}}</th>        
        {{/each}}
    </tr>

    {{#each jobRequest}}
    <tr>        
        <td>{{propertyname}}</td>
        <td>{{address}}</td>
        <td>{{city}}</td>
        <td>{{countrycode}}</td>
        <td>{{bedrooms}}</td>
        <td>{{bathrooms}}</td>
        <td>{{propertytype}}</td>
        <td>{{accessinfo}}</td>
        <td>{{garbageinfo}}</td>
        <td>{{parkinginfo}}</td>
        <td>{{wifiname}}</td>
        <td>{{wifipassword}}</td>
        <td>{{wifidescription}}</td>
        <td>{{importantinfo}}</td>
        <td>{{job_title}}</td>
        <td>{{jobType}}</td>
        <td>{{totalCost}}</td>
        <td>{{billableTime}}</td>
        <td>{{totalMileage}}</td>

        {{#each jobRequest.costs}}
            <tr>
                <td>{{costs.value}}</td>
                <td>{{costs.type}}</td>
                <td>{{costs.reporterName}}</td>
            </tr>
        {{/each}}

        <td>{{jobsenddate}}</td>
        <td>{{schedulestart}}</td>
        <td>{{scheduleend}}</td>
        <td>{{scheduletime}}</td>
        <td>{{scheduleduration}}</td>
        <td>{{actualstartdate}}</td>
        <td>{{actualenddate}}</td>
        <td>{{actualtime}}</td>
        <td>{{actualstarttime}}</td>
        <td>{{actualendtime}}</td>
        <td>{{duration}}</td>
        <td>{{statusofrequest}}</td>
        <td>{{msgtoserviceprovider}}</td>
        <td>{{offeredprice}}</td>
        <td>{{offeredpricecurrency}}</td>
        <td>{{canceledbyme}}</td>
        <td>{{canceledbyserviceprovider}}</td>
        <td>{{name}}</td>
        <td>{{timedate}}</td>
        <td>{{viewed}}</td>
        <td>{{response}}</td>
        <td>{{msgfromserviceprovider}}</td>
        <td>{{slides}}</td>
        <td>{{tasks}}</td>
        <td>{{verificationphotos}}</td>
        <td>{{problemsreported}}</td>
        <td>{{problemslist}}</td>
        <td>{{title}}</td>
        <td>{{description}}</td>
    </tr>
    {{/each}}
</table>`;