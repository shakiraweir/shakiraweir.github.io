hideExperienceSection()
hideEducationSection()
hideSkillsSection()

// links section
function clickunHandler() {
    hideExperienceSection()
    hideEducationSection()
    hideSkillsSection()
    showBioSection()
}

function clickHandler() {
    hideBioSection()
    hideEducationSection()
    hideSkillsSection()
    showExperienceSection()
}

function clicksHandler() {
    hideBioSection()
    hideExperienceSection()
    hideSkillsSection()
    showEducationSection()
}

function clickinHandler() {
    hideBioSection()
    hideExperienceSection()
    hideEducationSection()
    showSkillsSection()
}

//hide and reveal sections
function hideBioSection() {
    document.getElementById('bio').style.display='none'
}
function showBioSection() {
    document.getElementById('bio').style.display='block'
}

function showExperienceSection() {
    document.getElementById('experience').style.display = 'block';
}
function hideExperienceSection() {
    document.getElementById('experience').style.display = 'none';
}

function hideEducationSection() {
    document.getElementById('education').style.display = 'none';
}
function showEducationSection() {
    document.getElementById('education').style.display = 'block';
}

function hideSkillsSection() {
    document.getElementById('skills').style.display = 'none';
}

function showSkillsSection() {
    document.getElementById('skills').style.display = 'block';
}

// experience section 

