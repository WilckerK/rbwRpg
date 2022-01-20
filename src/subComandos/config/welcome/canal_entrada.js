module.exports = (client, interaction) => {
    const channel = interaction.options.getChannel('canal')

    if(channel.type === 'GUILD_TEXT') {
    if(interaction.guild.db.welcome) interaction.guild.db.welcome.channel = channel.id
    else interaction.guild.db.welcome = { channel: channel.id }

    interaction.guild.db.save()
    interaction.reply('Tudo certinho. (~-~)-b ')
    } else { return interaction.reply({ content: 'Informe apenas um canal de texto.', ephemeral: true})}
}