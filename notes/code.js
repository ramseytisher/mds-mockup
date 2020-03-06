function CalculateH0100A {
    getPowerChartResults = [`Urinary Elimination Devices`, `Urinary Catheter Type:`, `Urinary Catheter Activity:`];
    IF {
        `Urinary Elimination Devices`} ONE OF [`Indwelling catheter`, `Nephrostomy`, `Suprapubic catheter`] 
    } THEN CodeH0100A = CHECK/TRUE
    ELSE IF {
        `Urinary Catheter Type:`} == `Indwelling/Continuous` 
        AND {`Urinary Catheter Activity:`} LAST RESPONSE IS NOT `Discontinued`
    } THEN CODE = CHECK/TRUE
    ELSE THEN CODE = UNCHECK/FALSE
}